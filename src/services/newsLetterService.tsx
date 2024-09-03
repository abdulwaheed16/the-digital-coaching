import { NewsLetter } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { sendNewsletter } from "actions/newsLetter";

export const newsLetterService = async ({ email }: NewsLetter) => {
  console.log("newsLetter service email--------", email);
  const query = useQuery({
    queryKey: ["regiserUser"],
    queryFn: async () => {
      sendNewsletter({ email });
    },
  });

  const { data, isError, isPending, isSuccess } = query;
  console.log("News Letter Response: ", data);
  return {
    data,
    isError,
    isPending,
    isSuccess,
  };
};
