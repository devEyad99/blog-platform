import { NotFoundException, UnauthorizedException } from "@nestjs/common";

export const PostResponseService = {
  postCreated: {
    en: 'post created successfully',
    ar: 'تم إنشاء المنشور بنجاح',
  },
  postsFecthecSuccessfully: {
    en: 'posts fetched successfully',
    ar: 'تم جلب المنشور بنجاح',
  },
  postFecthecSuccessfully: {
    en: 'post fetched successfully',
    ar: 'تم جلب المنشور بنجاح',
  },
  postUpdatedSuccessfully: {
    en: 'post updated successfully',
    ar: 'تم تحديث المنشور بنجاح',
  },
  postdeletedSuccessfully: {
    en: 'post deleted successfully',
    ar: 'تم حذف المنشور بنجاح',
  },
  postNotFound: {
    en: 'post not found',
    ar: 'المنشور غير موجود',
    ExceptionType: NotFoundException
  },
  postNotBelongToYou: {
    en: 'post not belong to you',
    ar: 'المنشور لا ينتمي إليك',
    ExceptionType: UnauthorizedException
  }
}