import { FC } from "react";
import {Info} from "../components/info/Info";
import {About} from "../components/about/About";
import {Phone} from "../components/phone/Phone";
import {Steps} from "../components/steps/Steps";
import {MyWork} from "../components/myWork/MyWork";
import {Services} from "../components/services/Services";
import {Rites} from "../components/rites/Rites";
import {Consultation} from "../components/consultation/Consultation";
import {BlogSection} from "../components/blogSection/BlogSection";

export const HomePage: FC = () => {
  return <>
    <Info/>
    <About/>
    <Phone text='Запис на консультацію за номером'/>
    <Steps/>
    <MyWork/>
    <Phone text='Зв’яжіться зі мною прямо зараз'/>
    <Services/>
    <Phone text='Більше інформації за номером'/>
    <Rites/>
    <Phone text='Більше інформації за номером'/>
    <Consultation/>
    <BlogSection/>
  </>;
};
