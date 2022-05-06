# V8 Regex Compilation OOM Error

There is a known v8 bug (see [issue 10441](https://bugs.chromium.org/p/v8/issues/detail?id=10441) and [issue 11069](https://bugs.chromium.org/p/v8/issues/detail?id=11069)) that will cause a Heap Out of Memory error to occur, even when the process in question has not exceeded the max heap size.

This program will deterministically crash with an OOM on Node v16.x.x, V8 9.x.x.x

## Steps to repro

With any Node 16.x, 

1. `npm run start`

This will produce the following error, far under the max heap size

```
<--- Last few GCs --->

[20959:0x128008000]     4726 ms: Mark-sweep (reduce) 117.8 (131.2) -> 117.8 (128.2) MB, 5.4 / 0.0 ms  (average mu = 0.000, current mu = 0.000) last resort GC in old space requested
[20959:0x128008000]     4731 ms: Mark-sweep (reduce) 117.8 (128.2) -> 117.8 (128.2) MB, 5.1 / 0.0 ms  (average mu = 0.000, current mu = 0.000) last resort GC in old space requested


<--- JS stacktrace --->

FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory
```

## Notes

This is not an issue for Node 18.x, with V8 10.x.x.x.