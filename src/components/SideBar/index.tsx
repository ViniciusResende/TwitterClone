import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';



import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List 
            title="Quem seguir"
            elements={[
              <FollowSuggestion 
                name="Milene Rosa"
                nickname="@Millyflowerr"
                picture="https://pbs.twimg.com/profile_images/1362226508207644672/3v7-gUuF_400x400.jpg"
              />,
              <FollowSuggestion 
                name="RAFINHA"
                nickname="@Rafael_gk1"
                picture="https://pbs.twimg.com/profile_images/1301699761121243136/UytoSV70_400x400.jpg"
              />,
              <FollowSuggestion 
                name="Alice Maria"
                nickname="@AliceOldak"
                picture="https://pbs.twimg.com/profile_images/1358980244728934402/G-4FTFPq_400x400.jpg"
              />,
            ]}
          />
          <List 
            title="O que está acontecendo"
            elements={[
              <News tag="BBB 21 · Last night" name="Carla, Fiuk ou Rodolffo: um dos três deixa o 'BBB 21' na próxima terça"/>,
              <News tag="Trending in Brazil" name="Whatsapp 2"/>,
              <News tag="Football · Trending" name="Rodrigo Caetano"/>
            ]}
          />
          <List 
            title="Talvez você curta"
            elements={[
              <News tag="Gaming · Trending" name="PlayStation 5"/>,
              <News tag="Politics · Trending" name="#COVIDー19"/>,
              <News tag="Politics · Trending" name="#WorldWaterDay"/>
            ]}
          />
          <List 
            title="O que está acontecendo"
            elements={[
              <News tag="BBB 21 · Last night" name="Carla, Fiuk ou Rodolffo: um dos três deixa o 'BBB 21' na próxima terça"/>,
              <News tag="Trending in Brazil" name="Whatsapp 2"/>,
              <News tag="Football · Trending" name="Rodrigo Caetano"/>
            ]}
          />
          <List 
            title="Talvez você curta"
            elements={[
              <News tag="Gaming · Trending" name="PlayStation 5"/>,
              <News tag="Politics · Trending" name="#COVIDー19"/>,
              <News tag="Politics · Trending" name="#WorldWaterDay"/>
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
}

export default SideBar;