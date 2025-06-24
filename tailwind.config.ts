import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Premium portfolio colors
				'portfolio-primary': '#6366f1',
				'portfolio-secondary': '#8b5cf6',
				'portfolio-accent': '#f59e0b',
				'portfolio-dark': '#0f172a',
				'portfolio-light': '#f8fafc',
			},
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif'],
				'inter': ['Inter', 'sans-serif'],
				'mono': ['JetBrains Mono', 'monospace'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'float-slow': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'50%': { transform: 'translateY(-30px) rotate(5deg)' }
				},
				'float-fast': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'50%': { transform: 'translateY(-15px) rotate(-3deg)' }
				},
				'gradient-flow': {
					'0%': { backgroundPosition: '0% 50%' },
					'25%': { backgroundPosition: '100% 50%' },
					'50%': { backgroundPosition: '100% 100%' },
					'75%': { backgroundPosition: '50% 100%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'gradient-flow-dark': {
					'0%': { backgroundPosition: '0% 50%' },
					'20%': { backgroundPosition: '80% 30%' },
					'40%': { backgroundPosition: '100% 70%' },
					'60%': { backgroundPosition: '20% 100%' },
					'80%': { backgroundPosition: '0% 80%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'floating-orbs': {
					'0%, 100%': { 
						transform: 'translate(0px, 0px) scale(1)',
						opacity: '0.8'
					},
					'25%': { 
						transform: 'translate(30px, -30px) scale(1.1)',
						opacity: '0.6'
					},
					'50%': { 
						transform: 'translate(-20px, 20px) scale(0.9)',
						opacity: '0.9'
					},
					'75%': { 
						transform: 'translate(20px, 10px) scale(1.05)',
						opacity: '0.7'
					}
				},
				'floating-orbs-dark': {
					'0%, 100%': { 
						transform: 'translate(0px, 0px) scale(1) rotate(0deg)',
						opacity: '0.6'
					},
					'20%': { 
						transform: 'translate(40px, -20px) scale(1.2) rotate(72deg)',
						opacity: '0.4'
					},
					'40%': { 
						transform: 'translate(-30px, 30px) scale(0.8) rotate(144deg)',
						opacity: '0.8'
					},
					'60%': { 
						transform: 'translate(25px, -15px) scale(1.1) rotate(216deg)',
						opacity: '0.5'
					},
					'80%': { 
						transform: 'translate(-15px, 25px) scale(0.9) rotate(288deg)',
						opacity: '0.7'
					}
				},
				'mesh-float': {
					'0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
					'33%': { transform: 'translate(30px, -30px) scale(1.1)' },
					'66%': { transform: 'translate(-20px, 20px) scale(0.9)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)' },
					'50%': { boxShadow: '0 0 40px rgba(99, 102, 241, 0.6)' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				float: 'float 6s ease-in-out infinite',
				'float-slow': 'float-slow 8s ease-in-out infinite',
				'float-fast': 'float-fast 4s ease-in-out infinite',
				'gradient-flow': 'gradient-flow 20s ease infinite',
				'gradient-flow-dark': 'gradient-flow-dark 25s ease infinite',
				'floating-orbs': 'floating-orbs 25s ease-in-out infinite',
				'floating-orbs-dark': 'floating-orbs-dark 30s ease-in-out infinite',
				'mesh-float': 'mesh-float 20s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'fade-in': 'fade-in 0.6s ease-out'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-portfolio': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
				'gradient-glass': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
				'gradient-light': 'linear-gradient(45deg, #667eea 0%, #764ba2 15%, #f093fb 30%, #f5576c 45%, #4facfe 60%, #00f2fe 75%, #a8edea 90%, #fed6e3 100%)',
				'gradient-dark': 'linear-gradient(45deg, #0f0f23 0%, #1a1a2e 15%, #16213e 30%, #0f3460 45%, #533483 60%, #7209b7 75%, #2d1b69 90%, #0f0f23 100%)'
			},
			backdropBlur: {
				xs: '2px',
			},
			boxShadow: {
				'3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;