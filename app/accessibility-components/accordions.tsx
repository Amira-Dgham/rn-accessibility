// src/examples/Accordions.tsx
import { Accordion, ThemedText } from '@/components';

import React from 'react';

interface AccordionsProps {
  level: 'A' | 'AA' | 'AAA';
}

const Accordions: React.FC<AccordionsProps> = ({ level }) => {
  if (level === 'A') {
    // Simple accordion with basic toggle
    return (
      <Accordion title="Basic Accordion (Level A)" children={<ThemedText>Basic accordion content</ThemedText>} />
    );
  }

  if (level === 'AA') {
    // Accordion with improved keyboard navigation or styling
    return (
      <Accordion title="Enhanced Accordion (Level AA)" children={<ThemedText>Enhanced accordion content with better accessibility</ThemedText>} />
    );
  }

  // AAA level: full ARIA roles and announcements (simulate here)
  return (
    <Accordion title="Full Accessibility Accordion (Level AAA)" children={<ThemedText>Full accessibility accordion with complete ARIA support</ThemedText>} />
  );
};

export default Accordions;
