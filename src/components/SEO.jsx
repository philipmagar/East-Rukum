import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, url = "https://east-rukum.vercel.app", image = "/images/places/putha-himal.jpg", type = "website", author = "Eastern Rukum Tourism" }) => {
    const siteTitle = title ? `${title} | Eastern Rukum` : 'Eastern Rukum | Discover the Untouched Beauty';
    const siteDescription = description || "Explore the breathtaking landscapes and rich Kham Magar culture of Eastern Rukum (Rukum Purba), Nepal. Discover Putha Himal, Dhorpatan, and vibrant traditions.";

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{siteTitle}</title>
            <meta name='description' content={siteDescription} />
            {keywords && <meta name="keywords" content={keywords} />}
            <meta name="author" content={author} />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={url} />
            
            {/* OpenGraph / Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={siteDescription} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content="Eastern Rukum" />
            
            {/* Twitter tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={siteDescription} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
};

export default SEO;
