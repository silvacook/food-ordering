
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";
import Hero from "../components/layout/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders 
          subHeader={"Our story"}
          mainHeader={"About us"}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4
        flex flex-col gap-4">  
          <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Etiam nec scelerisque neque. Donec tempus turpis quis euismod 
          semper. In ultricies dapibus purus a accumsan. Vivamus at tellus 
          faucibus, imperdiet
          </p>
          <p>
          tincidunt felis. Fusce pharetra, est vel pellentesque maximus, 
          ex velit vestibulum metus, et congue leo nisi id sem. Quisque 
          faucibus scelerisque suscipit. Vivamus gravida efficitur 
          </p>
          <p>Ut id mi pharetra, imperdiet tortor sit amet, pretium
           arcu. Morbi tempus vel augue id lacinia. Mauris rutrum,
           </p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders 
          subHeader={"Don\'t hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+46123651352">
          +46 123 651 352</a>
        </div>
      </section>
    </>
  );
}
