import Layout from '@/app/_components/layout/Layout';
import HeroSection from '@/app/_components/home/HeroSection';
import ServicesOverview from '@/app/_components/home/ServicesOverview';
import HowItWorks from '@/app/_components/home/HowItWorks';
import AboutPreview from '@/app/_components/home/AboutPreview';
import LocationSection from '@/app/_components/home/LocationSection';

export default function Index() {
  return (
    <Layout>
      <HeroSection />
      <ServicesOverview />
      <HowItWorks />
      <AboutPreview />
      <LocationSection />
    </Layout>
  );
};
