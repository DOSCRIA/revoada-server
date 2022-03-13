import { Request, Response, NextFunction } from 'express';
import { i18n } from 'src/helpers/internationalization';
import { locales } from 'src/helpers/locales';
import acceptLanguage from 'accept-language';

export function language(req: Request, res: Response, next: NextFunction) {
  const acceptLanguages = req.headers['accept-language'];

  acceptLanguage.languages(locales);

  const language = acceptLanguage.get(acceptLanguages);

  i18n.setLocale(language || 'en-US');

  next();
};

export { i18n };