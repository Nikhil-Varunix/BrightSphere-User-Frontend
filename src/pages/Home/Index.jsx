
import HomeSlider from './Homeslider';
import ChooseUs  from './ChooseUs';
import { Blog } from './Blog';
import { Categories } from './Categories';
import { Research } from './Research';
import {Testimonials } from './Testimonials';
const Index = () => {
  return (
    <>
      {/* <Header /> */}
      <HomeSlider />
      <ChooseUs />
      <Blog />
      <Categories />
      <Testimonials />
      <Research />
      {/* <Footer /> */}
    </>
  );
};

export default Index;
