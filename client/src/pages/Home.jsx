import Section from "@/components/common/Section"
import SliderHome from "@/components/common/Slider"


const Home = () => {

  return (
    <div className="bg-background">
      <SliderHome/>
      <Section title={"women's clothing"}  bgColor={"bg-background"} />
      <Section title={"men's clothing"} bgColor={"bg-background"}  />
      <Section title={"jewellery"}   bgColor={"bg-background"} />
      <Section title={"electronics"} bgColor={"bg-background"}  />
    </div>
  )
}

export default Home