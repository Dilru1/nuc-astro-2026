# Chapter 5: Approximation methods: Wentzel–Kramers–Brillouin (WKB)

In your Quantum Chemistry class, or Quantum Mechanics class, you solved the Time Independent Schrödinger Equation (TISE) for simple systems with a constant potential ($V(x)=V_0$). However, in real *nuclear physics* and *nuclear astrophysics* problems, potentials are rarely constant. For example:

* Coulomb barriers in nuclear fusion
* Nuclear mean-field potentials
* Alpha decay barriers
* Scattering potentials

In these situations,

$$
V \rightarrow V(x),
$$

and exact analytical solutions are often impossible.

The Wentzel–Kramers–Brillouin (WKB) approximation provides an approximate solution when the potential varies slowly compared to the local wavelength of the particle.

---

## 5.1 Physical Motivation

Recall the de Broglie relation

$$
\lambda=\frac{h}{p}.
$$

For a constant potential, the momentum is constant,

$$
p=\sqrt{2m(E-V_0)},
$$

and therefore the wavelength is also constant.

The wavefunction can then be represented as a plane wave

$$
\psi(x)\propto e^{ikx},
$$

where

$$
k=\frac{2\pi}{\lambda}=\frac{p}{\hbar}.
$$

However, if the potential varies with position,

$$
V=V(x),
$$

then the momentum becomes position dependent,

$$
p(x)=\sqrt{2m(E-V(x))}.
$$

Consequently,

$$
\lambda \rightarrow \lambda(x), \qquad k \rightarrow k(x).
$$

The wavelength changes continuously as the particle moves through space.

Instead of the phase

$$
kx,
$$

we must now accumulate the phase locally:

$$
kx \;\rightarrow\; \int k(x)\,dx.
$$

This observation forms the foundation of the WKB approximation.

---

## 5.2 WKB Ansatz

The central assumption of WKB is that the wavefunction can be written as

$$
\psi(x) = A(x)\,e^{iS(x)/\hbar},
$$

where

* $A(x)$ is a slowly varying amplitude,
* $S(x)$ is a rapidly varying phase.

This is known as the **WKB Ansatz**.

The word *Ansatz* is a German term meaning an educated guess motivated by physical reasoning.

The quantity $S(x)$ is closely related to the classical action.

---

## 5.3 Schrödinger Equation

Starting from the Time Independent Schrödinger Equation,

$$
-\frac{\hbar^2}{2m}\frac{d^2\psi}{dx^2} + V(x)\psi = E\psi,
$$

we substitute

$$
\psi(x) = A(x)e^{iS(x)/\hbar}.
$$

Differentiating gives

$$
\psi' = \left( A' + \frac{i}{\hbar}AS' \right) e^{iS/\hbar},
$$

and

$$
\psi'' = \left[ A'' + \frac{2i}{\hbar}A'S' + \frac{i}{\hbar}AS'' - \frac{A(S')^2}{\hbar^2} \right] e^{iS/\hbar}.
$$

Substituting into the Schrödinger equation and simplifying yields

$$
\frac{(S')^2}{2m} + V - E - \frac{i\hbar}{m}\frac{A'}{A}S' - \frac{i\hbar}{2m}S'' - \frac{\hbar^2}{2m}\frac{A''}{A} = 0.
$$

Notice that different terms contain different powers of $\hbar$.

The WKB approximation assumes

$$
\hbar^0 \gg \hbar^1 \gg \hbar^2.
$$

Therefore we solve the equation order-by-order in powers of $\hbar$.

---

## 5.4 Zeroth Order Approximation

Keeping only the leading order term,

$$
\frac{(S')^2}{2m} + V - E = 0.
$$

Therefore,

$$
S'(x) = \pm\sqrt{2m(E-V(x))} = \pm\, p(x).
$$

Integrating,

$$
S(x) = \pm \int p(x)\,dx.
$$

This is the first major WKB result.

Notice that

$$
\frac{dS}{dx}=p(x),
$$

which is exactly the classical momentum.

Thus WKB naturally connects quantum mechanics with classical mechanics.

---

### Slides
#### Charged Particle reactions <span style="background:#ff4d4f;color:white;padding:2px 8px;border-radius:12px;font-size:12px;">NEW</span>

[Charged Particle Induced Reactions](assets/class7/presentation-1-36.pdf)  <span style="background:#ff4d4f;color:white;padding:2px 8px;border-radius:12px;font-size:12px;">NEW</span>


[Sommerfeld Parameter, the Gamow Peak, and Applications to Stellar Burning](assets/class7/nuc4_extra.pdf)  <span style="background:#ff4d4f;color:white;padding:2px 8px;border-radius:12px;font-size:12px;">NEW</span>

