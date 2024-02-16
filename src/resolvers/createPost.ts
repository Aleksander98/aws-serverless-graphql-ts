import { Context, DynamoDBPutItemRequest, util } from '@aws-appsync/utils';
import { MutationAddPostArgs, Post } from '../models/schema';

export function request(
  ctx: Context<MutationAddPostArgs>,
): DynamoDBPutItemRequest {
  const postItem: Post = {
    id: util.autoId(),
    author: ctx.args.author,
    content: ctx.args.content,
    title: ctx.args.title,
  };

  return {
    operation: 'PutItem',
    key: {
      id: util.dynamodb.toDynamoDB(postItem.id),
    },
    attributeValues: util.dynamodb.toMapValues(postItem),
  };
}

export function response(
  ctx: Context<MutationAddPostArgs, object, object, object, Post>,
) {
  return ctx.result;
}
