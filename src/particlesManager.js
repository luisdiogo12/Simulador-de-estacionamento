import * as THREE from "three";

export class Particle {
  constructor({
    position,
    velocity,
    lifeTime = 1.0,
    color = 0xffaa00,
    size = 0.2,
  }) {
    this.lifeTime = lifeTime; 
    this.age = 0; 
    this.velocity = velocity.clone(); 
    const spriteMap = new THREE.TextureLoader().load("/textures/particle.png");
    const material = new THREE.SpriteMaterial({
      map: spriteMap,
      color: color,
      transparent: true,
      opacity: 1,
      depthWrite: false,
    });
    this.sprite = new THREE.Sprite(material);
    this.sprite.scale.set(size, size, size);
    this.sprite.position.copy(position);
  }

  update(delta) {
    this.age += delta;
    if (this.age > this.lifeTime) return false; 

    this.sprite.position.addScaledVector(this.velocity, delta);

    this.velocity.y -= 9.81 * delta * 0.5; 

    const t = this.age / this.lifeTime; 
    this.sprite.material.opacity = 1.0 - t; 
    const newSize = THREE.MathUtils.lerp(this.sprite.scale.x, 0, t);
    this.sprite.scale.set(newSize, newSize, newSize);

    return true; 
  }
}

export class ParticlesManager {
  constructor(scene) {
    this.scene = scene;
    this.particles = [];
  }

  emit(position, direction, options = {}) {
    const {
      count = 20,
      spreadAngle = Math.PI / 4,
      speedMin = 5,
      speedMax = 15,
      lifeTime = 0.8,
      color = 0xffaa00,
      size = 0.2,
    } = options;

    for (let i = 0; i < count; i++) {
      // gera direção aleatória dentro de um cone em torno de "direction"
      const axis = new THREE.Vector3();
      const quaternion = new THREE.Quaternion();
      // espalha ± spreadAngle
      const randAxis = new THREE.Vector3(
        Math.random() - 0.5,
        Math.random() - 0.5,
        Math.random() - 0.5
      ).normalize();
      // gira a direção base para criar um vetor dentro do cone
      quaternion.setFromAxisAngle(
        randAxis,
        (Math.random() - 0.5) * spreadAngle
      );
      const velDir = direction.clone().normalize().applyQuaternion(quaternion);
      // escolhe velocidade aleatória entre min e max
      const speed = THREE.MathUtils.lerp(speedMin, speedMax, Math.random());
      const velocity = velDir.multiplyScalar(speed);

      const particle = new Particle({
        position: position.clone(),
        velocity,
        lifeTime,
        color,
        size,
      });
      this.particles.push(particle);
      this.scene.add(particle.sprite);
    }
  }

  update(delta) {
    // varrer de trás para frente para poder remover
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const alive = this.particles[i].update(delta);
      if (!alive) {
        // remove do scene e do array
        this.scene.remove(this.particles[i].sprite);
        this.particles.splice(i, 1);
      }
    }
  }
}
