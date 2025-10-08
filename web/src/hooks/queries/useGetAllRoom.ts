import { PaginationResponse } from "@/models/response";
import { IRoom, IRoomQuery } from "@/models/room.model";
import { roomService } from "@/services/room.service";
import { useQuery } from "@tanstack/react-query";

export const useGetAllRoom = (query: IRoomQuery) => {
        const {
                data: rooms,
                isLoading,
                isError,
                refetch,
                isFetching,
        } = useQuery<PaginationResponse<IRoom>, Error>({
                queryKey: ["getAllRoom", query],
                queryFn: async () => {
                        const response = await roomService.getAllRoom(query)
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
