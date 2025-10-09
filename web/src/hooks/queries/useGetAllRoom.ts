import { IRoom, IRoomQuery, PaginationResponseRoom } from "@/models/room.model";
import { roomService } from "@/services/room.service";
import { useQuery } from "@tanstack/react-query";

export const useGetAllRoom = (query: IRoomQuery) => {
        const {
                data: rooms,
                isLoading,
                isError,
                refetch,
                isFetching,
        } = useQuery<PaginationResponseRoom<IRoom>, Error>({
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
