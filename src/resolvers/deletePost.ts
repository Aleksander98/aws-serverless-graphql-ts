import { Context, DynamoDBDeleteItemRequest, util } from '@aws-appsync/utils';

import { MutationDeletePostArgs } from '../models/schema';

export function request(
  ctx: Context<MutationDeletePostArgs>,
): DynamoDBDeleteItemRequest {
  return {
    operation: 'DeleteItem',
    key: {
      id: util.dynamodb.toDynamoDB(ctx.args.id),
    },
  };
}

export function response(ctx: Context<MutationDeletePostArgs>) {
  return ctx.result;
}
