import React from 'react';

import { Container } from './styles';

interface Props {
  tag: string;
  name: string;
}

const News: React.FC<Props> = ({tag, name}) => {
  return (
    <Container>
      <span>{tag}</span>
      <strong>{name}</strong>
    </Container>
  );
}

export default News;