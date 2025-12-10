// src/lib/styles.js

export const colors = {
  maroon: { DEFAULT: '#5d0006', dark: '#400004', light: '#7a1a18' },
  gold: { DEFAULT: '#d79117', dark: '#b6780e', light: '#e6a832' },
  ivory: '#fdfbf7',
  grey: '#e8e6e1',
};

// Button styles
export const buttonStyles = {
  primary:
    'bg-[#5d0006] hover:bg-[#400004] text-white shadow-sm hover:shadow-md transition-all duration-300',
  secondary:
    'bg-[#d79117] hover:bg-[#b6780e] text-white shadow-sm hover:shadow-md transition-all duration-300',
  outline:
    'border-2 border-[#5d0006] text-[#5d0006] bg-transparent hover:bg-[#5d0006] hover:text-white transition-all duration-300',
  ghost:
    'text-[#5d0006] hover:bg-[#5d0006]/10 transition-all duration-300',
  white:
    'bg-white text-[#5d0006] hover:bg-[#f9f5f2] shadow-sm hover:shadow-md transition-all duration-300',
  gold:
    'bg-[#d79117] hover:bg-[#b6780e] text-white shadow-sm hover:shadow-md transition-all duration-300',
};

// Text styles
export const textStyles = {
  heading: 'text-[#5d0006]',
  body: 'text-gray-800',
  muted: 'text-gray-600',
  light: 'text-gray-500',
  accent: 'text-[#d79117]',
  maroon: 'text-[#5d0006]',
  gold: 'text-[#d79117]',
  ivory: 'text-[#fdfbf7]',
};

// Card styles
export const cardStyles = {
  default: 'bg-white border border-gray-200 shadow-sm',
  elevated: 'bg-white shadow-md border-none',
  outlined: 'bg-white border-2 border-[#5d0006]',
  accent: 'bg-[#fdfbf7] border-none shadow-sm',
  maroon: 'bg-[#5d0006] text-white shadow-md',
  gold: 'bg-[#d79117] text-white shadow-md',
};

// Gradients
export const gradients = {
  maroonGold: 'bg-gradient-to-r from-[#5d0006] to-[#d79117]',
  goldMaroon: 'bg-gradient-to-r from-[#d79117] to-[#5d0006]',
  subtle: 'bg-gradient-to-b from-white to-[#fdfbf7]',
};
