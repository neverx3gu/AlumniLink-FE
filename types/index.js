// src/types/index.js
export const API_RESPONSE = {
  success: 'boolean',
  response: 'object',
  error: 'string'
};
  
export const POST_TYPE = {
  id: 'number',
  title: 'string',
  body: 'string',
  nickname: 'string',
  tag: 'string',  // '자유' | '정보' | '질문'
  startTime: 'string',
  modifiedTime: 'string'
 };

export const MEMBER_TYPE = {
  id: 'number',
  nickname: 'string'
};