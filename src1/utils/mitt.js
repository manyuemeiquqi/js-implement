function eventBus() {
  return {
    emit(type, evt) {
      const handler = all.get();
    },
  };
}
