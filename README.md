# hallo

this is hallo repository

API Doc

openapi: '3.0.0'
info:
version: 1.0.0
title: Hallo API Reference
license:
name: AtenTEC
servers: - url: http://192.168.1.105

paths:
/hallo:
get:
summary: Returns a string
operationId: Return Hallo from Backend Server
tags: - pets
responses:
200:
description: Successful Response
