# Chapter 10: Big Bang Nucleosynthesis (BBN)

Building the first nuclei, with a short introduction to cosmology

### Slides
#### BBN
[BBN](assets/class10/bbn.pdf)  <span style="background:#ff4d4f;color:white;padding:2px 8px;border-radius:12px;font-size:12px;">NEW</span>

![The cosmic web](assets/class10/cosmic_web.png)


This is our first look at physical cosmology: how the young Universe expanded, cooled, and built the first atomic nuclei from raw thermodynamics. Within the first few minutes after the Big Bang, protons and neutrons fused into the lightest elements, fixing the roughly 75% hydrogen and 25% helium composition we still see today. Reproducing that ratio from known nuclear physics is the goal of this chapter.

## A short introduction to cosmology

Cosmology studies the Universe as a whole. It rests on the Cosmological Principle: on large scales the Universe is homogeneous and isotropic, and the same laws hold everywhere.

Four facts point to an expanding, cooling Universe with a hot start

1. Distant galaxies are redshifted, so space expands.
2. Matter is about 75% H and 25% He by mass, so the past was hot and dense.
3. The sky glows with the CMB, a 2.7 K black body, a relic of a hot equilibrium.
4. Gas at high redshift is measurably hotter.

**Redshift and scale factor.** A line emitted at $\lambda_e$ is seen at longer $\lambda_o$, with redshift $z=(\lambda_o-\lambda_e)/\lambda_e$. This is not a Doppler shift; wavelengths stretch with space itself. All distances grow with one scale factor $a(t)$, set to $a=1$ today, and photons stretch the same way:

$$1+z=\frac{1}{a}.$$

So measuring $z$ tells us the size of the Universe when the light left, making redshift a clock (recombination sits at $z\simeq1100$).

**Content.** Today's budget is about 68% dark energy, 27% dark matter, 5% baryons, and a trace of radiation. For BBN only two things matter: the radiation that dominated the early Universe, and the baryons whose nuclei we build.

**Expansion and temperature.** Radiation dilutes fastest ($\propto a^{-4}$), so it dominates at the earliest times. Then $a\propto\sqrt{t}$ and the temperature falls as $T=T_0/a$, giving

$$k_BT\sim\frac{1\text{ MeV}}{\sqrt{t(\text{s})}}.$$

So $t\sim1$ s means $k_BT\sim1$ MeV, the scale of nuclear and weak physics. That is why BBN happens when it does.

## Equilibrium and freeze-out

Two effects change the number density of any species: expansion, which dilutes it slowly, and reactions, which pull it toward equilibrium at rate $\Gamma$. Together:

$$\frac{dn}{dt}=-3Hn-\Gamma(n-n_e).$$

When $\Gamma\gg H$ reactions win and $n$ tracks equilibrium. When $\Gamma\ll H$ expansion wins and the abundance freezes. Since $\Gamma$ falls faster than $H$, every species eventually freezes out, leaving a relic set by the conditions at freeze-out. BBN is a sequence of three such freeze-outs.

The key number is the baryon-to-photon ratio,

$$\eta=\frac{n_b}{n_\gamma}\sim5\times10^{-10},$$

about one baryon per billion photons. Its smallness will delay nucleosynthesis. Both BBN and the CMB measure $\eta$ independently and agree.

## Three freeze-outs

Everything below is set in motion around $k_BT\sim1$ MeV, $t\sim1$ s.

**1. Neutrinos decouple.** Weak reactions can no longer hold neutrinos in the bath, so they freeze out while still relativistic and stay abundant. Just after, $e^+e^-$ pairs annihilate and heat the photons but not the decoupled neutrinos, leaving the neutrino background slightly colder:

$$T_\nu=\left(\tfrac{4}{11}\right)^{1/3}T_\gamma\simeq1.95\text{ K}.$$

This relic is predicted but not yet directly detected. Its energy density adds to $H$, so BBN counts neutrino species and finds $N_{\rm eff}\simeq3$.

**2. The n/p ratio freezes.** Protons and neutrons interconvert by weak reactions, holding $n/p\simeq\exp(-\Delta m\,c^2/k_BT)$ with $\Delta m\,c^2\simeq1.29$ MeV. The weak rates freeze at $k_BT\sim0.8$ MeV, locking in $n/p\simeq1/6$. Free neutrons then decay (lifetime about 15 min), so by the time fusion starts the ratio has drifted to $n/p\simeq1/7$.

**3. Helium follows directly.** Almost every surviving neutron ends up in helium-4, so

$$Y_p=\frac{2(n/p)}{1+n/p}=\frac{2/7}{8/7}=0.25.$$

The famous 25% helium is just the frozen neutron-to-proton ratio.

## The deuterium bottleneck

Every route to helium runs through deuterium ($p+n\to D+\gamma$, binding energy 2.2 MeV). No deuterium means no helium. Although $k_BT$ drops below 2.2 MeV already at $t\sim1$ s, deuterium still cannot form, because there are a billion photons per baryon and the high-energy tail of the bath keeps breaking it apart. Only when $k_BT$ falls to about 0.07 MeV, at $t\sim3$ min, does deuterium survive. This is the deuterium bottleneck. Once it breaks, fusion runs quickly and sweeps neutrons into $^4$He, giving about 75% H and 25% He by mass, matching observations.

Fusion then stops: no stable nuclei exist at mass 5 or 8, and the Universe is too cold and dilute to bridge the gap. Heavier elements wait for stars. Small traces survive: $D/H\sim10^{-5}$, $^3$He$/H\sim10^{-5}$, $^7$Li$/H\sim10^{-10}$.

## Observations and significance

From one parameter, $\eta$, BBN predicts all light-element abundances. Helium depends weakly on $\eta$; deuterium depends steeply, making it an excellent baryometer. Measurements give $Y_p\simeq0.245$ and $D/H\simeq2.5\times10^{-5}$. Both BBN (at $t\sim3$ min) and the Planck CMB (at $t\sim380{,}000$ yr) give $\Omega_bh^2\simeq0.022$: independent clocks, one answer.

One tension remains, the lithium problem: BBN predicts about three times more $^7$Li than is seen in old halo stars. The cause (stellar depletion, nuclear rates, or new physics) is still open.

## Summary

| Time | $k_BT$ | Event |
|---|---|---|
| ~1 s | ~1 MeV | neutrinos decouple; n/p freezes at 1/6 |
| 1 s to 3 min | MeV to 0.1 MeV | neutrons decay: n/p goes to 1/7 |
| ~3 min | ~0.07 MeV | deuterium bottleneck breaks |
| ~3 to 20 min |  | fusion builds $^4$He plus traces |
| end |  | about 75% H, 25% He by mass |

Key points: the early Universe was hot, dense, and radiation-dominated with $a\propto\sqrt{t}$; freeze-out governs everything; two frozen numbers ($\eta\sim5\times10^{-10}$ and $n/p\simeq1/7$) set the outcome; helium comes out at $Y_p\simeq0.25$; and the results agree with the CMB.

References: Weinberg, *Cosmology*; Kolb & Turner, *The Early Universe*; Peacock, *Cosmological Physics*; PDG Big-Bang Nucleosynthesis review (pdg.lbl.gov).