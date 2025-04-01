import { ITopicsResponse } from '@/models/topic.model';
import { topicService } from '@/services/topic.service';
import { useQuery } from '@tanstack/react-query';

type Paginate = {
    page?: number;
    limit?: number;
    searchText?: string;
};

export const useGetAllTopic = ({ page, limit, searchText }: Paginate) => {
    const {
        data: topics,
        isLoading,
        isError,
        refetch,
        isFetching,
    } = useQuery<ITopicsResponse, Error>({
        queryKey: ['getTopic', page, limit, searchText],
        queryFn: async () => {
            const response = await topicService.getAllopic(page, limit, searchText);
            return response.data;
        },
        refetchOnWindowFocus: false,
    });

    return {
        topics,
        isLoading,
        isError,
        refetch,
        isFetching,
    };
};
