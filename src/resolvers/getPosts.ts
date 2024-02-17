import { Context, DynamoDBScanRequest } from '@aws-appsync/utils';
import { QueryGetPostsArgs, PostsResult } from '../models/schema';

const DEFAULT_LIMIT = 4;

export function request(ctx: Context<QueryGetPostsArgs>): DynamoDBScanRequest {
  return {
    operation: 'Scan',
    limit: DEFAULT_LIMIT,
    nextToken: ctx.args.pageToken ?? undefined,
  };
}

export function response(
  ctx: Context<QueryGetPostsArgs, object, object, object, PostsResult>,
) {
  return ctx.result;
}
