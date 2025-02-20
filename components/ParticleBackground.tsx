import { useCallback } from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      className="absolute inset-0 -z-10"
      init={particlesInit}
      options={{
        background: {
          opacity: 0
        },
        particles: {
          color: {
            value: ["#6366f1", "#8b5cf6", "#d946ef"]
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 2
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce"
            },
            random: true,
            speed: 1,
            straight: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200
            }
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 40
          },
          opacity: {
            value: 0.4,
            random: true,
            animation: {
              enable: true,
              speed: 0.5,
              minimumValue: 0.1,
              sync: false
            }
          },
          shape: {
            type: "circle"
          },
          size: {
            value: { min: 1, max: 3 },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.1,
              sync: false
            }
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab"
            },
            onClick: {
              enable: true,
              mode: "push"
            }
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.5
              }
            },
            push: {
              quantity: 4
            }
          }
        },
        detectRetina: true,
        fpsLimit: 120,
        fullScreen: {
          enable: false
        }
      }}
    />
  );
};