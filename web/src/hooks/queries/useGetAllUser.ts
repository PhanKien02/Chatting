import { ApiResponse, PaginationResponse } from '@/models/response';
import { IUser } from '@/models/user.model';
import { topicService } from '@/services/topic.service';
import { userService } from '@/services/user.service';
import { useQuery } from '@tanstack/react-query';

type Paginate = {
    page?: number;
    limit?: number;
    searchText?: string;
};

export const useGetAllUser = ({ page, limit, searchText }: Paginate) => {
    const {
        data: users,
        isLoading,
        isError,
        refetch,
        isFetching,
    } = useQuery<PaginationResponse<IUser>, Error>({
        queryKey: ['getTopic', page, limit, searchText],
        queryFn: async () => {
            const response = await userService.getAllUser(page, limit, searchText);
            return response.data;
        },
        refetchOnWindowFocus: false,
    });

    return {
        users,
        isLoading,
        isError,
        refetch,
        isFetching,
    };
};
