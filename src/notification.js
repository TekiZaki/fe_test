// src/notification.js

import { qs, apiFetch, pretty } from "./utils.js";

function setupNotificationActions() {
  const listResult = qs("#notificationListResult");
  const actionResult = qs("#notificationActionResult");

  // --- List Notifications ---
  qs("#btnListNotifications").addEventListener("click", async () => {
    const userId = qs("#notificationUserId").value.trim();
    const isRead = qs("#notificationIsRead").value.trim();

    let url = "/notifications?";
    if (userId) url += `userId=${encodeURIComponent(userId)}&`;
    if (isRead) url += `isRead=${encodeURIComponent(isRead)}&`;

    const res = await apiFetch(url);
    listResult.textContent = pretty(res);
  });

  // --- Get by ID ---
  qs("#btnGetNotificationById").addEventListener("click", async () => {
    const id = qs("#notificationActionId").value.trim();
    if (!id) {
      alert("Provide Notification ID");
      return;
    }
    const res = await apiFetch(`/notifications/${id}`);
    actionResult.textContent = pretty(res);
  });

  // --- Mark as Read ---
  qs("#btnMarkAsRead").addEventListener("click", async () => {
    const id = qs("#notificationActionId").value.trim();
    if (!id) {
      alert("Provide Notification ID");
      return;
    }
    const res = await apiFetch(`/notifications/${id}/read`, {
      method: "PATCH",
    });
    actionResult.textContent = pretty(res);
  });
}

export function setupNotification() {
  setupNotificationActions();
}
