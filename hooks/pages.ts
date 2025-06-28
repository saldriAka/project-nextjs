import { FormData, Page } from "@/types/pages";
import { useState } from "react";

export const usePages = () => {
  const [pages, setPages] = useState<Page[]>([
    {
      id: 1,
      title: "Home Page",
      slug: "home",
      isPublished: true,
      isDraft: false,
      createdAt: "2024-01-15",
      translations: 2,
      sections: 3,
    },
    {
      id: 2,
      title: "About Us",
      slug: "about",
      isPublished: false,
      isDraft: true,
      createdAt: "2024-01-20",
      translations: 1,
      sections: 2,
    },
  ]);

  return { pages, setPages };
};

export const defaultFormData: FormData = {
  isPublished: false,
  isDraft: true,
  translations: {
    ID: {
      title: "",
      slug: "",
      desc: "",
      metaTitle: "",
      metaDescription: "",
      canonicalUrl: "",
      coverImageUrl: "",
      ogImageUrl: "",
    },
  },
  robots: "index,follow",
  sections: [],
};
