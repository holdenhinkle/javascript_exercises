function myBind(func, ctx) {
  return function() {
    return func.apply(ctx, arguments);
  }
}