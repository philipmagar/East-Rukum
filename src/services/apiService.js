export const apiService = {
  fetchGalleryImages: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            src: "/images/3e4aaf8a-2edc-4c53-9fff-985f4fb76aae.jpg",
            alt: "Eastern Rukum Landscape",
          },
          {
            src: "/images/4670a2f4-0cde-4fab-8b79-449f58b08d64.jpg",
            alt: "Local Life",
          },
          {
            src: "/images/480f5b4c-9762-49dd-84b4-83b057b7f9d9.jpg",
            alt: "Mountain View",
          },
          {
            src: "/images/53fed32e-022d-4f78-a316-ad2c1517e41e.jpg",
            alt: "Traditional Architecture",
          },
          {
            src: "/images/879abfa3-3e70-44c4-a4e0-2f812f3fa2e3.jpg",
            alt: "Village Scene",
          },
          {
            src: "/images/9053aa88-e39a-41a3-8ac0-4cc08c7caced.jpg",
            alt: "Nature",
          },
          { src: "/images/animal-grazing.jpg", alt: "Animal Grazing" },
          { src: "/images/roads-to-village-winter.jpg", alt: "Winter Roads" },
          {
            src: "/images/c896bbad-e958-430d-a6b1-b14a4f0e8722.jpg",
            alt: "Scenic Route",
          },
          {
            src: "/images/d556bf00-795e-46ef-a62e-7c90387b3d2d.jpg",
            alt: "Valley View",
          },
          {
            src: "/images/jeep-crossing-river.jpg",
            alt: "Jeep Crossing River",
          },
          { src: "/images/view-2.jpg", alt: "Panoramic View" },
          {
            src: "/images/places/putha-himal-2.jpg",
            alt: "Putha Himala View 2",
          },
          {
            src: "/images/places/putha-himal-3.jpg",
            alt: "Putha Himala View 3",
          },
        ]);
      }, 500);
    });
  },
  fetchTakVillageImages: async (t) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            src: "/images/villages/tak-village.jpg",
            alt: "Classic Taka",
            caption: t("Old houses", "पुराना घरहरू"),
          },
          {
            src: "/images/villages/tak-during-rainy-season.png",
            alt: "Rainy Season",
            caption: t("Green in the rain", "वर्षामा हरियाली"),
          },
          {
            src: "/images/villages/tak-village-far.jpg",
            alt: "Panoramic View",
            caption: t("Looking from far away", "टाढाबाट हेर्दा"),
          },
          {
            src: "/images/villages/tak-school.jpg",
            alt: "Tak School",
            caption: t("The village school", "गाउँको विद्यालय"),
          },
          {
            src: "/images/villages/tak-village-2.jpg",
            alt: "Village Life",
            caption: t("Just a normal day", "साधारण दिन"),
          },
          {
            src: "/images/villages/tak.jpg",
            alt: "Historic Streets",
            caption: t("Walking paths", "हिँड्ने बाटोहरू"),
          },
        ]);
      }, 500);
    });
  },
  fetchDestinations: async (t) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            img: "/images/places/sisne-himal.jpg",
            title: t("Sisne Himal", "सिस्ने हिमाल"),
            desc: t(
              "People call it the Virgin Peak. It's really good for trekking if you like walking.",
              "मान्छेहरू यसलाई भर्जिन पिक भन्छन्। यदि तपाईंलाई हिँड्न मन पर्छ भने यो ट्रेकिङको लागि राम्रो छ।",
            ),
          },
          {
            img: "/images/places/rukumkot-lake.jpg",
            title: t("Rukumkot", "रुकुमकोट"),
            desc: t(
              "It's an old town. They say there used to be 52 lakes around here.",
              "एउटा पुरानो शहर। यहाँ वरिपरि ५२ वटा पोखरी थिए भन्छन्।",
            ),
            className: "no-watermark",
          },
          {
            img: "/images/places/thakur-patan.png",
            title: t("Thakur Patan", "ठाकुर पाटन"),
            desc: t(
              "It's high up in the hills. You can see a lot of different plants and animals.",
              "यो धेरै माथि छ। त्यहाँ धेरै थरीका बोटबिरुवा र जनावरहरू देख्न पाइन्छ।",
            ),
            className: "no-watermark",
          },
          {
            img: "/images/places/Dhorpatan-Hunting-Reserve.jpg",
            title: t("Dhorpatan Hunting Reserve", "धोरपाटन शिकार रिजर्भ"),
            desc: t(
              "The only place in Nepal where hunting is allowed. You might see blue sheep.",
              "नेपालमा शिकार गर्न पाइने एक मात्र ठाउँ। तपाईंले यहाँ नीलो भेडा देख्न सक्नुहुन्छ।",
            ),
          },
          {
            img: "/images/places/rukumkot-lake-2.jpeg",
            title: t("Small Lakes", "साना तालहरू"),
            desc: t(
              "There are smaller lakes all around Rukumkot. The locals have stories about them.",
              "रुकुमको वरिपरि साना तालहरू छन्। स्थानीयहरूका यस बारेमा आफ्नै कथाहरू छन्।",
            ),
            className: "no-watermark",
          },
          {
            img: "/images/places/sisne-himal-2.jpg",
            title: t("Sisne Base Camp", "सिस्ने आधार शिविर"),
            desc: t(
              "Walking to the bottom of the mountain is just as nice as looking at the top.",
              "हिमालको फेदसम्म हिँड्नु पनि शिखर हेर्नु जत्तिकै रमाइलो हुन्छ।",
            ),
            className: "no-watermark",
          },
          {
            img: "/images/places/hunting-reserve.jpg",
            title: t("The Forest", "जङ्गल"),
            desc: t(
              "The forests are thick here. Not many people go inside.",
              "यहाँका जङ्गलहरू बाक्ला छन्। भित्र धेरै मान्छे जाँदैनन्।",
            ),
            className: "no-watermark",
          },
        ]);
      }, 500);
    });
  },
};
