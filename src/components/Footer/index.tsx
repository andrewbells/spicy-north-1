import React, { FunctionComponent } from 'react';
import { Container, Info, NoWrap } from './style';

export const Footer: FunctionComponent<{}> = () => {
    return (
        <Container>
            <Info>
                <NoWrap>&copy; 2020</NoWrap>{' '}
                <NoWrap>
                    Spicy North Games
                </NoWrap>
            </Info>
            <Info>This website uses no cookies</Info>
        </Container>
    );
};
