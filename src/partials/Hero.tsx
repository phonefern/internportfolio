import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hello my name is <GradientText>Phone</GradientText> 👋
        </>
      }
      description={
        <>
          Hello my name is <GradientText>Phone</GradientText>. I am a{' '}
          <GradientText>Data Scientist</GradientText>. Interesting in{' '}
          <GradientText>AI, NLP, ML</GradientText> I have Experience in
          developing machine learning models for specific needs, such as
          predicting departments fron intitial systoms, creating chatbots that
          learn from package data, and analyzing sentiment from patient messages
          to improve efficiency of care and follow-up.
        </>
      }
      avatar={
        <img
          className="h-64 w-64"
          src="/assets/images/shinjung_profile.jpg"
          alt="Avatar image"
          loading="lazy"
          style={{ borderRadius: '50%', padding: '20px', margin: '20px' }}
        />
      }
      socialButtons={
        <>
          <a href="https://huggingface.co/phoner45" style={{ margin: '10px' }}>
            <HeroSocial
              src="/assets/images/pngwing-com.png"
              alt="Hugging Face icon"
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100009450383341"
            style={{ margin: '10px' }}
          >
            <HeroSocial src="/assets/images/facebook.svg" alt="Facebook icon" />
          </a>
          <a
            href="https://www.instagram.com/phonegoodboi/"
            style={{ margin: '10px' }}
          >
            <HeroSocial
              src="/assets/images/instagram.svg"
              alt="Instagram icon"
            />
          </a>
          {/* <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a> */}
        </>
      }
    />
  </Section>
);

export { Hero };
