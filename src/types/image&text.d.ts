declare type ImageToTextResponse = {
  obj: {
    id: number;
    image: string;
    created_at: string;
  };
  text: string;
};

declare type ImageToTextRequest = {
  id: number;
  image: string;
  created_at: string;
};
