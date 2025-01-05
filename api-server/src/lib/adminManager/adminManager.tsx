class AdminManager {
  private static instance: AdminManager;

  public static getInstance() {
    if (!this.instance) {
      this.instance = new AdminManager();
    }
    return this.instance;
  }
}
