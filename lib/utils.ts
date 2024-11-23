import { type ApolloError } from "@apollo/client";
import { toast } from "sonner";
export const onError = (error: ApolloError) =>
    toast.error("Алдаа гарлаа!", { description: error.message });