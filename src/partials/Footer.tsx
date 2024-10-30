import { Section } from 'astro-boilerplate-components';

const Footer = () => (
  <Section>
    <p className="text-center text-sm text-gray-500">
      &copy; {new Date().getFullYear()} Phone YuTaeSuan. All rights reserved.
    </p>
  </Section>
);

export { Footer };
