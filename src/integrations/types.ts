export type Database = {
  public: {
    Tables: {
      // 空的 Tables 定义，具体表结构根据项目需求添加
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
};