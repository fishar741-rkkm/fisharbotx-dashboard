#!/bin/bash
# سكربت سريع للـ Commit + Push

# لو فيه ملفات جديدة أو تعديلات
git add .

# اعمل Commit برسالة تلقائية فيها التاريخ والوقت
git commit -m "Update: $(date '+%Y-%m-%d %H:%M:%S')"

# اعمل Push للفرع الرئيسي
git push origin main
