import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import {
  Container,
  BaseContent,
  HeaderWrapper,
  ContentWrapper,
  Title,
  Subtitle,
} from './styles';

interface TemplatePageProps {
  title: string;
  subtitle?: string;
}

const TemplatePage: React.FC<TemplatePageProps> = ({
  title,
  subtitle = '',
  children,
}) => {
  return (
    <Container>
      <BaseContent>
        <HeaderWrapper>
          <Title>{title}</Title>
          <Subtitle>{ReactHtmlParser(subtitle)}</Subtitle>
        </HeaderWrapper>
        <ContentWrapper>{children}</ContentWrapper>
      </BaseContent>
    </Container>
  );
};

export default TemplatePage;
