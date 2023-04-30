import { Helmet } from 'react-helmet';
import {MetaTagsI} from "./types/metaTagsI";


export const SetMetaTags = ({ title, description, keywords }: MetaTagsI) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
        </Helmet>
    );
};
