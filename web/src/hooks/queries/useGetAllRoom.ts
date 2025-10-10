import { ICreateConversation, ICreateConversationQuery, PaginationResponseRoom } from "@/models/conversation.model";
import { roomService } from "@/services/conversation.service";
import { useQuery } from "@tanstack/react-query";

export const useGetAllRoom = (query: ICreateConversationQuery) => {
        const {
                data: rooms,
                isLoading,
                isError,
                refetch,
                isFetching,
        } = useQuery<PaginationResponseRoom<ICreateConversation>, Error>({
                queryKey: ["getAllRoom", query],
                queryFn: async () => {
                        const response = await roomService.getAllCreateConversation(query)
                        return response;
                },
                refetchOnWindowFocus: false,
        });

        return {
                rooms,
                isLoading,
                isError,
                refetch,
                isFetching,
        };
};
