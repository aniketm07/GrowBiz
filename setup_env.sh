#!/bin/bash

echo SERVER_ADDRESS=$FRONTEND_SERVER_ADDRESS >> ./frontend/.env
echo NEXTAUTH_SECRET=$FRONTEND_NEXTAUTH_SECRET >> ./frontend/.env
echo NEXTAUTH_URL=$FRONTEND_NEXTAUTH_URL >> ./frontend/.env
