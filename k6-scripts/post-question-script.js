/* eslint-disable func-names */
/* eslint-disable import/no-unresolved */
import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '1s', target: 10 },
    { duration: '28s', target: 10 },
    { duration: '1s', target: 10 },
  ],
  thresholds: {
    http_req_duration: ['p(99)<2000'],
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  const productId = Math.floor((Math.random() * 100001) + 900010);
  const payload = JSON.stringify({
    product_id: productId,
    body: 'test test',
    name: 'lorem',
    email: 'ipsum@gmail.com',
  });
  const headers = { 'Content-Type': 'application/json' };
  http.post('http://localhost:3000/qa/questions', payload, { headers });
  sleep(1);
}
