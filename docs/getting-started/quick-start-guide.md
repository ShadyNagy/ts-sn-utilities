---
layout: default
title: Quick Start Guide
parent: Getting Started
nav_order: 2
---

# TS-SN-Utilities Quick Start Guide


1. Install NPMJS-Package(s)
    a. Always required: [TS-SN-Utilities](https://www.npmjs.com/package/ts-sn-utilities/)
2. In your service write this code.
    ```javascript
    getFilteredByCode(code: string): Observable<ApiResponse> {
        this.debouncerHelper.resetData();
        return this.debouncerHelper.debouncerOnly<string, ApiResponse>(1000, code, (request) => this.filterBy(request));
    }
    ```