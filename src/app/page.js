
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
          At our core, we believe in the art of fragrance discovery without the pressure of committing to a full bottle. The world of niche perfumes is vast and exciting, but buying full bottles without experiencing them first can often lead to disappointment. 
          That&rsquo;s why we created a space where fragrance lovers can explore high-quality, authentic perfumes in convenient 1ml glass spray vials.
          </p>
          <p>
          Unlike others who offer decants, our goal is to provide just the right amount for a true scent experience—without overwhelming the senses or the budget. Our carefully curated collection ensures that every vial is a 
          chance to discover something new and beautiful, making it easy to try a variety of scents before making any decisions.
          </p>
          <p>
            Join us on the journey to explore, enjoy, and find the fragrance that truly speaks to you.
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
