class PaginateService {
  constructor(page = 1, limit = 10, Model) {
    this.page = page;
    this.limit = limit;
    this.Model = Model;
  }

  async paginate() {
    const skip = (this.page - 1) * this.limit;
    const results = await this.Model.find().skip(skip).limit(this.limit).exec();
    const total = await this.Model.countDocuments();
    const totalPages = Math.ceil(total / this.limit);
    const nextPage = this.page < totalPages ? this.page + 1 : null;

    return {
      count: results.length,
      pagination: {
        totalPages,
        currentPage: this.page,
        next: nextPage,
        prev: this.page > 1 ? this.page - 1 : null
      },
      hasMore: Boolean(nextPage),
      data: results
    };
  }
}

export default PaginateService;