import React, { FunctionComponent } from 'react';
import Helmet from 'react-helmet';
import { Props } from './type';
import { Query } from './query';

export const SEO: FunctionComponent<Props> = ({
    description = 'Spicy North is a mobile game development studio from Helsinki, Finland, rooted in Argentina.',
    lang = 'en',
    meta = [],
    keywords = [mobile, game, mobile game, developer, unity],
    title,
}) => {
    return (
        <Query>
            {data => {
                console.warn('render!');

                const metaDescription =
                    description || data.site.siteMetadata.description;

                return (
                    <Helmet
                        htmlAttributes={{
                            lang,
                        }}
                        title={title}
                        titleTemplate={`%s | ${data.site.siteMetadata.title}`}
                        meta={[
                            {
                                name: `description`,
                                content: metaDescription,
                            },
                            {
                                property: `og:title`,
                                content: title,
                            },
                            {
                                property: `og:description`,
                                content: metaDescription,
                            },
                            {
                                property: `og:type`,
                                content: `website`,
                            },
                        ]
                            .concat(
                                keywords.length > 0
                                    ? [
                                          {
                                              name: `keywords`,
                                              content: keywords.join(`, `),
                                          },
                                      ]
                                    : [],
                            )
                            .concat(meta)}
                    />
                );
            }}
        </Query>
    );
};
