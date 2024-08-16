import './Home.css';
import { HomeEntitymanagerManager } from './entity-manager-manager';
import { HomeGridGrid } from './grid-grid';

const Home = () => {

  return (
    <section className="home-page">
      <rapid-layout auto-save-key="Home_1723798041338">
        <rapid-layout-region>
          <rapid-layout-item title="Entity manager">
            <HomeEntitymanagerManager></HomeEntitymanagerManager>
          </rapid-layout-item>
          <rapid-layout-item title="Grid">
            <HomeGridGrid></HomeGridGrid>
          </rapid-layout-item>
        </rapid-layout-region>
      </rapid-layout>
    </section>
  );
};

export default Home;
