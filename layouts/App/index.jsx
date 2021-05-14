import React from 'react';
import './fonts.css';
import { ContentLayout, Section, Footer } from './styles';
import Header from '@components/Header';
import IntroSlider from '@components/IntroSlider';
import History from '@components/History';
import WarehouseLocation from '@components/WarehouseLocation';
import CooperationCompany from '@components/CooperationCompany';

function App() {
  return (
    <div>
      <Header />
      <ContentLayout>
        <IntroSlider />
        <Section>picture1</Section>
        <Section>video</Section>
        <History />
        <Section>picture2</Section>
        <WarehouseLocation />
        <CooperationCompany />
      </ContentLayout>
      <Footer>footer</Footer>
    </div>
  );
}
export default App;
