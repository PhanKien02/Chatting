import { IConversation } from "@/interfaces/conversation.interface";
import { IQuery } from "@/utils/buildFilterSortAndPaginate";

export class FindConversationByQuery extends IQuery<IConversation> {
        idUser: number
}